import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

function TopBar() {
    return (
        <Stack direction='horizontal' gap={3}>
            <h1>autocite</h1>
            <h3>UNSW Style Harvard Citations</h3>
            <Button variant='secondary' className='ms-auto'>About</Button>
        </Stack>
    );
}

export default TopBar;