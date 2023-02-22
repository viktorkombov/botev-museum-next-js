import { Delete, Edit } from '@mui/icons-material';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import CarouselBootstrap from '@/components/UI/CarouselBootstrap';
import MasterDetailTable from '@/components/UI/MasterDetailTable';
import SectionHeader from '@/components/UI/SectionHeader/SectionHeader';
import { useHttpClient } from '@/hooks/http-hook';
import img from '@/images/museum.jpg';
import classes from './Dashboard.module.scss';
import { getSession, useSession } from 'next-auth/client';
import { baseUrl } from '@/utils/data';
import { useRouter } from 'next/router';
import LoadingSpinner from '@/components/UI/LoadingSpinner';

function Dashboard() {
    const [postsData, setPostsData] = useState([]);
    const [currentAction, setCurrentAction] = useState('');
    const [currentPost, setCurrentPost] = useState({});
    const [openDialog, setOpenDialog] = useState(false);
    const router = useRouter();
    const [session, loading] = useSession();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const showDialog = (action, post) => {
        setCurrentPost(lastPost => ({
            ...lastPost,
            ...post
        }));
        setCurrentAction(action);
        setOpenDialog(true);
    }

    const onDialogClose = async (cancel) => {
        if (!cancel) {
            if (currentAction === 'DELETE') {
                try {
                    const responseData = await sendRequest(
                        `${baseUrl}api/novini/${currentPost.ID}`,
                        'DELETE'
                    );
                    const postIndex = postsData.findIndex(post => post.ID === currentPost.ID);
                    postsData.splice(postIndex, 1);
                    setPostsData(postsData);
                } catch (error) {

                }
            } else {
                router.replace(`/bg/novini/${currentPost.ID}/edit`)
            }
        }
        setOpenDialog(false);
    }

    const DIALOG_TEXTS = {
        DELETE: { title: 'Изтриване на публикация', content: 'Потвърдете, че искате да изтриете публикация със заглавие ' },
        EDIT: { title: 'Редактиране на публикация', content: 'Потвърдете, че искате да редактирате публикация със заглавие ' }
    }

    useEffect(() => {
        if (session) {
            setTimeout(() => {
                const fetchArtilces = async () => {
                    try {
                        var url = new URL(baseUrl + 'api/novini')
                        var params = { 'keys[]': ['ID', 'Title', 'Date'] }
                        url.search = new URLSearchParams(params).toString();

                        const responseData = await sendRequest(
                            url
                        );

                        setPostsData(responseData);
                    } catch (err) { }
                };
                fetchArtilces();
            }, 200);
        } else {
            router.redirect('/bg/login');
        }

    }, []);

    const dummyColumns = [
        {
            id: '',
            template: row => {
                return (
                    <div className={classes['action-buttons']}>
                        <IconButton onClick={() => showDialog('EDIT', row)}>
                            <Edit />
                        </IconButton>
                        <IconButton onClick={() => showDialog('DELETE', row)}>
                            <Delete />
                        </IconButton>
                    </div>
                )
            }
        },
        {
            id: "Title",
            headerText: "Заглавие",
            sortable: true,
            numeric: false,
            classesOuter: `${classes["name-cell"]}`,
            classesInner: `${classes["header__text--name-title"]}`,
        },
        {
            id: "Date",
            headerText: "Дата на публикуване",
            classesOuter: `${classes["years-cell"]}`,
            classesInner: `${classes["header__text--years-old-title"]}`,
        }
    ];

    return (
        <Fragment>
            {postsData.length ? (<Fragment>
                <SectionHeader style={{paddingTop: '12rem'}}>
                <h2>Административен панел</h2>
            </SectionHeader>
                <section className={classes['main']}>
                    <h4>Потребител:</h4>
                    <h5>Национален музей &quot;Христо Ботев&quot;</h5>

                    <MasterDetailTable originalRows={postsData} columns={dummyColumns} filterBy="Title" searchFieldPlaceHolder="Търси по заглавие" />
                </section>
                <Dialog
                    open={openDialog}
                    disableScrollLock
                    onClose={() => onDialogClose(true)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {DIALOG_TEXTS[currentAction]?.title}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {DIALOG_TEXTS[currentAction]?.content + '"' + currentPost.Title + '"?'}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <div className={classes['dialog-buttons']}>
                            <Button onClick={() => onDialogClose(true)}>Отказ</Button>
                            <Button onClick={() => onDialogClose()} autoFocus>
                                Потвърждавам
                            </Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </Fragment>) : <LoadingSpinner asOverlay />}
        </Fragment>
    );
}

// export async function getServerSideProps(context) {
//     const session = await getSession({ req: context.req });

//     if (!session) {
//         return {
//             redirect: {
//                 destination: '/bg/login',
//                 permanent: false
//             }
//         }
//     }

//     return {
//         props: {
//             session
//         }
//     }
// }

export default Dashboard;