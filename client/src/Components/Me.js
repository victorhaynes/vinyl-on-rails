import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Me() {

	const [user, setUser] = useState({})

	useEffect(()=> {
		fetch("/me")
		.then( (response) => response.json())
		.then( (data) => setUser(data))
	},[])

  return (
    	<div>
			<h1>Username: {user?.username}</h1>
			<h1>Email: {user?.email}</h1>
			<Link to={`/me/cart`}>
				<h2>Go To Cart</h2>
			</Link>
			<Link to={`/me/orders`}>
				<h2>Order Histroy</h2>
			</Link>
		</div>
  )
}

export default Me