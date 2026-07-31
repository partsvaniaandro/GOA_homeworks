const isAlpha = str => /^[a-zA-Z]+$/.test(str);
const Formatter = () => ({
    capitalize(str){
        const first = str.slice(0, 1)
        const rest = str.slice(1)

        if(isAlpha(first)){
            const capitalized = first.toUpperCase()
            const result = capitalized + rest
            return result
        }
        console.log('the first symbol isnt a letter')
        return
    }
})
export default Formatter