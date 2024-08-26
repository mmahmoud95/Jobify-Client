import styled from "styled-components";

const Wrapper = styled.nav`
    height: var(--nav-height);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
    background: var(--background-secondary-color);
    .nav-center {
        display: flex;
        width: 90%;
        align-items: center;
        justify-content: space-between;
    }
    .toggle-btn {
        background: transparent;
        border-color: transparent;
        font-size: 1.75rem;
        color: var(--primary-500);
        cursor: pointer;
        display: flex;
        align-items: center;
    }
    .logo-text {
        display: none;
    }
    .logo {
        display: flex;
        align-items: center;
        width: 100px;
    }
    .btn-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        position: relative;
    }
    .dropdown {
        position: absolute;
        border-radius: 4px;
        border: 1px;
        top: 36px;
        padding: 8px;
        background-color: var(--primary-500);
        width:100%;
        text-align: center;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
        transform: scaleY(0);
        transform-origin: top;
        transition:
            opacity 0.1s ease,
            transform 0.1s linear;     
            cursor: pointer;

    }
    .dropdown-btn {
        border: none;
        background-color: var(--primary-500);
        font-size: 16px;
        color: #fff;       
        cursor: pointer;

    }
    .dropdown.open {
        opacity: 1;
        transform: scaleY(1);
    }
    .dropdown.closed {
        opacity: 0;
        transform: scaleY(0);
    }
    @media (min-width: 992px) {
        position: sticky;
        top: 0;
        .nav-center {
            width: 90%;
        }
        .logo {
            display: none;
        }
        .logo-text {
            display: block;
        }
    }
`;
export default Wrapper;
