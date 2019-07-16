import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './collection-item.styles.scss'
import { CardActionArea } from '@material-ui/core';

const CollectionItem = ({ id, name, price, imageUrl }) => (
    <Card className='collection-item'>
        <CardActionArea className='action-area'>
            <CardMedia
                component="img"
                src={imageUrl}
                title='Card Image'
                className='image' />
            <CardContent classname='content'>
                <Typography color="textSecondary" component="p">
                    ${price}
                </Typography>
                <Typography component='h2'>
                    {name}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions className='collection-footer'>
            <button className='hero-btn' size="small" color="primary">
                Buy
            </button>
        </CardActions>
    </Card>
)

export default CollectionItem