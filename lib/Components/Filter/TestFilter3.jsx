import classes from './TestFilter3.module.css'

export const TestFilter3 = (props) => {

// const test = currentCategory
console.log(props.currentCategory);

return (
    <div className={classes.values}>
        {props.items[props.currentCategory]}
    </div>
)

    
    
}