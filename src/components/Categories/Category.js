const Category = ({product, onShop}) => {
    return <img src={product} onClick={onShop} />
}

export default Category;