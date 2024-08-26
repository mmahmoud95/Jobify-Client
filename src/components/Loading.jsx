function Loading({ center }) {
    return (
        <div
            style={{
                // height: '100px',
                padding: '30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className={'loading loading-center'}></div>;
        </div>
    );
}
export default Loading;
