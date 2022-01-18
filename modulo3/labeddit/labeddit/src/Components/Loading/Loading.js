import {CircularProgress} from '@chakra-ui/react'
import styled from "styled-components";

const Div = styled.div`
    height: 80vh;
    display: flex;
    align-items: center;
`

function Loading(){
    return(
        <Div>
            <CircularProgress isIndeterminate color='green.300' />
        </Div>
    )
}
export default Loading;