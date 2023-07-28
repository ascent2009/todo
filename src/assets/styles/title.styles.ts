import styled from 'styled-components';
import Typography from '@mui/material/Typography';

export const STitle = styled(Typography)`
    && {
        text-align: center;
        color: white;
        font-size: 3rem;
        font-weight: 600;
        padding-top: 2rem;
        margin-bottom: 2rem;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
`;

export const SSubTitle = styled(STitle)`
    && {
        font-size: 2rem;
        padding-top: 0;
        margin: 4rem auto;
    }
`;
