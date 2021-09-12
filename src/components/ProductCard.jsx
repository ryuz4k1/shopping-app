import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { makeStyles } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import { yellow, green, pink, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (product) => {
      if (product.category === 0) {
        return yellow[700]
      }
      if (product.category === 1) {
        return green[500]
      }
      if (product.category === 2) {
        return pink[500]
      }
      return blue[500]
    },
  }
})

export default function ProductCard({ product, handleDelete }) {
  const classes = useStyles(product)

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar} src={product.image}></Avatar>}
          action={
            <IconButton onClick={() => handleDelete(product.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={product.title}
          subheader={product.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            { product.description }
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}