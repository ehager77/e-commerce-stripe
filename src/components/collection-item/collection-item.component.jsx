import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

import './collection-item.styles.scss'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl} = item;
    return(
    <Card className='collection-item'>
            <CardMedia
                component="img"
                src={imageUrl}
                title='Card Image'
                className='image' />
            <CardContent className='content'>
                <Typography color="textSecondary" component="p">
                    ${price}
                </Typography>
                <Typography className='item-name' component='h2'>
                    {name}
                </Typography>
            </CardContent>
            <CardActions className='collection-footer'>
            <CustomButton onClick ={()=> addItem(item)} inverted>Add to Cart</CustomButton>
            </CardActions>
    </Card>
)};

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);