import { createSignal } from "solid-js"

export function Counter(props:any){

	// const {title, body} = props;
	const [count, setCount] = createSignal(props.count)

	const handleClick = (e:any)=>{
		console.log('handleClick', e)
		setCount(count()+1);
	}
	return (
		<div>
	<h4>{count()}</h4>
	<button onClick={handleClick}>click</button>
</div>
	)
}