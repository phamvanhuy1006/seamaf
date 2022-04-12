import { Container, Box } from '@mui/material';
import CartTable from './CartTable';

const Cart = () => {
  return (
    <Container className="cart">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            lg: '2fr 1fr'
          },
          gap: 4
        }}
      >
        <CartTable />
        <div></div>
      </Box>
    </Container>
  )
}

export default Cart