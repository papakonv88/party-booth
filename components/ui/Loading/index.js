import ClipLoader from "react-spinners/PacmanLoader";

const Loading = ({loading}) => (
    <div className='fixed top-0 left-0 w-screen h-screen bg-opacity-50 bg-black flex justify-center items-center'>
        <ClipLoader
            color={'red'}
            loading={loading}
            size={80}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
)

export default Loading
