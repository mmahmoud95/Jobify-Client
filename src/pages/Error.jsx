import Wrapper from "../assets/wrappers/ErrorPage";
import notfoundimage from "../assets/images/not-found.svg";

function Error() {
    return (
        <Wrapper>
            <img src={notfoundimage} />
        </Wrapper>
    );
}
export default Error;
