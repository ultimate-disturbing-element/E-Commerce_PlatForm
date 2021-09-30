import React from 'react'
import { Typography,Button,Card,CardActions,CardContent,CardMedia } from '@material-ui/core'
import useStyles from './styles';
import { InsertEmoticon } from '@material-ui/icons';
const CartItem = ({item,handleRemoveFromCart,handleUpdateCartQty}) => {
    const classes = useStyles();
    console.log(item)
    return (
        <Card className={classes.root}> 
            <CardMedia image={item.image.url}  alt={item.name} className={classes.media} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.CardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={()=>{handleUpdateCartQty(item.id,item.quantity-1)}}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small"onClick={()=>{handleUpdateCartQty(item.id,item.quantity+1)}}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={()=>handleRemoveFromCart(item.id)}>
                    Remove
                </Button>
            </CardActions>
        </Card>
       
    )
}

export default CartItem
