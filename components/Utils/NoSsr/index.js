const NoSsr = (props) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])
    return <>
        {mounted ? props.children : null}
    </>
}

export default NoSsr;