import styled from 'styled-components';

const Wrapper = styled.article`
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-rows: 1fr auto;
    box-shadow: var(--shadow-2);
    header {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--grey-100);
        display: grid;
        grid-template-columns: auto 1fr;
        align-items: center;
    }
    .main-icon {
        width: 60px;
        height: 60px;
        display: grid;
        place-items: center;
        background: var(--primary-500);
        border-radius: var(--border-radius);
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--white);
        margin-right: 2rem;
    }
    .info {
        h5 {
            margin-bottom: 0.5rem;
        }
        p {
            margin: 0;
            text-transform: capitalize;
            letter-spacing: var(--letter-spacing);
            color: var(--text-secondary-color);
        }
    }
    .pending {
        background: #fcefc7;
        color: #e9b949;
    }
    .interview {
        background: #e0e8f9;
        color: #647acb;
    }
    .declined {
        background: #d66a6a;
        color: #ffeeee;
    }
    .content {
        padding: 1rem 1.5rem;
    }
    .content-center {
        display: grid;
        margin-top: 1rem;
        margin-bottom: 1.5rem;
        grid-template-columns: 1fr;
        row-gap: 1.5rem;
        align-items: center;
        @media (min-width: 576px) {
            grid-template-columns: 1fr 1fr;
        }
    }
    .status {
        border-radius: var(--border-radius);
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing);
        text-align: center;
        width: 100px;
        height: 30px;
        display: grid;
        align-items: center;
    }
    .actions {
        margin-top: 1rem;
        display: flex;
        align-items: center;
    }
    .edit-btn,
    .delete-btn {
        height: 30px;
        font-size: 0.85rem;
        display: flex;
        align-items: center;
    }
    .edit-btn {
        margin-right: 0.5rem;
        background-color: #0fa15778;
        color: #076d39;
        font-size: 16px;
    }
    .delete-btn {
        background-color: #ff646478;
        color: #a50000;
    }
`;

export default Wrapper;
