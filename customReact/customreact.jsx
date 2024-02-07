

function contentRender(reactElement, mainContainer)
{
    // const docElement=document.createElement(reactElement.type)
    // docElement.setAttribute('href',reactElement.href)
    // docElement.setAttribute('target',reactElement.target)
    // docElement.innerHTML=reactElement.children
    // mainContainer.append(docElement)

    const docElement=document.createElement(reactElement.type)
    
    for(const prop in reactElement.props)
    {
        if(prop=='children')continue;
        docElement.setAttribute(prop,reactElement.props[prop])
    }
    if(reactElement.children!= null)
    docElement.innerHTML=reactElement.props.children
    else
    docElement.innerHTML=reactElement.props.innerContent
    mainContainer.append(docElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'

    },
    children:'click here to get me'

}
const reactElement1={
    type:'p',
    
    props:{
        innerContent:'lorem ipsum',
        children:'click here to get me'
    }

}

const mainContainer=document.querySelector('#root')
contentRender(reactElement1,mainContainer)