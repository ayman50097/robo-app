import React from'react';

const Card=(props)=>{
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw shadow-5'>
<img alt="nice" src={`https://robohash.org/${props.id}?200*200`}/>
<div>
<h2>
{props.name}</h2>
<p>{props.email}
</p>
</div>


</div>





);


}
export default Card;