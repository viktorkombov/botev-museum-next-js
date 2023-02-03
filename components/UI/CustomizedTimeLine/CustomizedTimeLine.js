import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Image from '../Image/Image';
import classes from './CustomizedTimeLine.module.scss';
import FloatingImage from '../../Layouts/FloatingImagesPage/FloatingImage';

export default function CustomizedTimeline() {
    const items = [{
        time: '25 декември 1847 г./6 януари 1848 г.',
        content: 'Христо Ботев се ражда в семейството на Ивана Стайкова Дрянкова и Ботьо Петков',
        image: 'https://muzeibotev.com/css/skins/custom/152/images/PC280921.JPG',
        imageTitle: 'Къщата на Христо Ботев'
    },
    {
        time: '1853 г. – 1863 г.',
        content: 'Ботев е ученик в Калофер и Карлово',
        image: ''
    },
    {
        time: 'октомври 1863 г.',
        content: 'Ботев заминава за Одеса',
        image: ''
    },
    {
        time: '19 ноември 1863 г.',
        content: 'Христо Ботев е приет като стипендиант във ІІ Одеска мъжка гимназия.',
        image: ''
    },
    {
        time: '1865 г.',
        content: 'Ботев е изключен от гимназията',
        image: ''
    },
    {
        time: '1866 г.',
        content: 'Ботев се записва се в Историко-филологическия факултет на Одеският университет',
        image: ''
    },
    {
        time: 'октомври 1866 г.',
        content: 'Ботев е учител в с. Задунаевка, Бесарабия',
        image: ''
    },
    {
        time: 'началото на 1867 г.',
        content: 'Ботев се завръща се в Калофер и замества болния си баща в Калоферското класно училище',
        image: ''
    },
    {
        time: '11 май 1867 г.',
        content: 'Ботев произнася огненото си слово',
        image: ''
    },
    {
        time: 'октомври 1867 г.',
        content: 'Ботев заминава за Румъния',
        image: ''
    },
    {
        time: '23 декември 1867 г.',
        content: 'Ботев пристига в Браила и постъпва на работа в печатницата на Димитър Паничков',
        image: ''
    },
    {
        time: 'юли 1868 г.',
        content: 'Ботев се записва за в четата на Жельо войвода',
        image: ''
    },
    {
        time: 'септември 1868 г.',
        content: 'Ботев пристига в Букурещ като актьор в театралната трупа на Добри Войников',
        image: ''
    },
    {
        time: 'октомври- декември на 1868 г.',
        content: 'Христо Ботев и Васил Левски живеят в запустяла вятърна мелница край Букурещ',
        image: ''
    },
    {
        time: 'февруари 1869 г.',
        content: 'Ботев е назначен за учител по български език в Александрия',
        image: ''
    },
    {
        time: '20 август 1869 г.',
        content: 'Ботев постъпва като учител по български език в Измаил',
        image: ''
    },
    {
        time: 'началото на  1871 г.',
        content: 'Христо Ботев напуска Измаил и се установява в Галац',
        image: ''
    },
    {
        time: 'май 1871 г.',
        content: 'Ботев се установява се в Браила',
        image: ''
    },
    {
        time: '10 юни 1871 г.',
        content: 'Излиза бр. І на в. “Дума на българските емигранти”, първият Ботев вестник',
        image: ''
    },
    {
        time: 'април 1872 г.',
        content: 'Ботев е арестуван и изпратен в затвора във Фокшан',
        image: ''
    },
    {
        time: 'средата на юли 1872 г.',
        content: 'Ботев е освободен и пристига в Букурещ',
        image: ''
    },
    {
        time: '1 май 1873 г.',
        content: 'Излиза бр. І на вестник “Будилник”, вторият самостоятелен Ботев вестник',
        image: ''
    },
    {
        time: '1874 г.',
        content: 'Ботев се включва се в редовете на организираното революционно движение',
        image: ''
    },
    {
        time: '20-21 август',
        content: 'В Букурещ се провежда се Общо събрание на БРЦК, в което участва и Ботев',
        image: ''
    },
    {
        time: '8 декември 1874 г.',
        content: 'Излиза брой І на в. “Знаме”, третият самостоятелен Ботев вестник.От него са отпечатани 27 броя',
        image: ''
    },
    {
        time: 'краят на декември 1874 г.',
        content: 'Ботев издава “Календар за годината 1875”, с лика на Хаджи Димитър и одата си „Хаджи Димитър”',
        image: ''
    },
    {
        time: '16 март 1875 г.',
        content: 'Христо Ботев и Любен Каравелов прекратяват съвместната си работа',
        image: ''
    },
    {
        time: 'юли 1875 г.',
        content: 'Христо Ботев свързва живота си с Венета Везирева',
        image: ''
    },
    {
        time: '12 август 1875 г.',
        content: 'Общото събрание на БРЦК в Букурещ решава да се вдигне всеобщо въстание в България',
        image: ''
    },
    {
        time: 'есента на 1875 г.',
        content: 'Излиза от печат “Песни и стихотворения от Ботйова и Стамболова”, единстваната издадена приживе стихосбирка с Ботевата поезия',
        image: ''
    },
    {
        time: '30 септември 1875 г.',
        content: 'Ботев подава оставката си от БРЦК',
        image: ''
    },
    {
        time: 'ноември 1875 г.',
        content: 'Създава се Гюргевският Централен комитет',
        image: ''
    },
    {
        time: 'към 10 април 1876 г.',
        content: 'Христо Ботев, Никола Обретенов и Георги Апостолов вземат решение за организирне на чета',
        image: ''
    },
    {
        time: '13 април 1876 г.',
        content: 'Ражда се дъщерята на Ботев - Иванка',
        image: ''
    },
    {
        time: '20 април 1876 г.',
        content: 'В България избухва Априлското въстание',
        image: ''
    },
    {
        time: '5 май 1876 г.',
        content: 'Излиза брой 1 на в. “Нова България”, последният Ботев вестник',
        image: ''
    },
    {
        time: '16 май',
        content: 'Христо Ботев се качва на парахода “Радецки” от пристанище Гюргево',
        image: ''
    },
    {
        time: '17 май',
        content: 'Ботевата четата слиза край Козлодуй',
        image: ''
    },
    {
        time: 'привечер на 17 май',
        content: 'Ботевите четниците влизат в с. Бутан',
        image: ''
    },
    {
        time: 'нощта срещу 18 май',
        content: 'Четниците преминават река Огоста и продължават на юг към Врачанския Балкан',
        image: ''
    },
    {
        time: '18 май',
        content: 'четниците преминават река Огоста и продължават на юг към Врачанския Балкан',
        image: ''
    },
    {
        time: '19 май и 20 май',
        content: 'Ботевите четници почиват на връх Веслец. 20 май четата заема последователно трите върха – Камарата, Купена и Околчица',
        image: ''
    },
    {
        time: 'привечер на 20 май (1 юни н. с.)',
        content: 'Христо Ботев загива, прострелян от вражески куршум в сърцето на югоизточния склон на вр. Камарата',
        image: ''
    }];

    return (
        <Timeline
            sx={{
                p: '0',
                m: '-0.5rem -1rem 0 0',
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
                "*": { fontFamily: '"Comfortaa", sans-serif !important' },
            }}
        >
            {items.map(item => (
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ bgcolor: '#4b371c' }} >{/* <FastfoodIcon /> */}</TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ pb: '12px', px: 2 }}>
                        <Paper elevation={3} sx={{ p: '1rem', overflowY: 'auto' }}>
                            <Typography sx={{ pb: '0.5rem', fontSize: '0.8rem !important' }} variant='body1'>
                                <strong>{item.time}</strong>
                            </Typography>
                            {item.image && <FloatingImage className={classes['wide-screen']} src={item.image} title={item.imageTitle} />}
                            <Typography sx={{ fontSize: '0.8rem !important' }}>
                                {item.content}
                            </Typography>
                            {item.image && <FloatingImage className={classes['small-screen']} src={item.image} title={item.imageTitle} />}
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}