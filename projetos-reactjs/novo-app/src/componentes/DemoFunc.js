// vamos criar um componente funcional (baseado em função)
//function DemoFunc(props){
    const DemoFunc = (props) => {
    return(
        <div>
            <h2> Um salve do nosso componente funcional!</h2>
            <h3>{props.Title}</h3>
        </div>
    );
}

//exportando o componente

export default DemoFunc;