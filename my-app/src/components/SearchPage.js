import { useLocation, useParams } from "react-router-dom";
import {useSelector} from 'react-redux'
import ProductItem from "./ProductItem"
import ProductPage from "../pages/ProductPage"
import NotFoundPage from "../components/NotFoundPage"
import { useLayoutEffect } from "react";


const SearchPage = (props) => {
  const Wrapper = () => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
  }
  Wrapper()
  let params = useParams()
  let isProduct = false
    const search = useSelector((state) => state.search.searchLine);
    const products = useSelector((state) => state.products.products);
    const genders = ["man","woman","kids"]
    const types = ["t-shirts","denim","accessories","bags"]
    let keys = []
    let i = 0 // createProduct
    const createProduct = (item) => {
      isProduct = true
        while(i < 3) {
            i++
           return <ProductItem key={randomKey()} name={item.name} image={item.mainFoto} link={`/products/${item.type}/${item.gender}/${item.ID}`} price={item.price}/>
        }
    }

    const randomKey = () => {

        let key = Math.floor(Math.random() * (90000000 - 10) + 10)

        if (keys.length == 0 || keys.map(element => key !== element)) {
            keys = [...keys, key]
            return key

        } else {
            randomKey()
        }
    }

   let ifPageExist = () => {

     if(types.includes(params.type) && genders.includes(params.gender)) {
           if(products[params.type][params.gender].length === 0) {
               return  <NotFoundPage text={"We don`t have products here yet"}></NotFoundPage>
           }

           else  {
               return products[params.type][params.gender].map(i => <ProductItem key={randomKey()} name={i.name} image={i.mainFoto} link={`/products/${i.type}/${i.gender}/${i.ID}`} price={i.price}/>)
           }

          if(products[params.type][params.gender].length === 0) {
            // return <span>we don`t have products here yet</span>
            return  <NotFoundPage text={"We don`t have products here yet"}></NotFoundPage>
          }
        }
        else if (!genders.includes(params.gender) || !types.includes(params.type) ) {
            return  <NotFoundPage text={"page not found"}></NotFoundPage>
   }

    }
  return (
    <>

        <div className={params.itemID !== undefined ? "" : "cards product-card"}>
            {/*render 3 products, for the home page*/}

            {    props.isFiltered == false && props.isHome == true && search === "" ? Object.keys(products).map(typeKeys => Object.keys(products[typeKeys]).map(genderKeys => products[typeKeys][genderKeys].map(item => createProduct(item)))) :
                props.isFiltered == false && props.isHome == false && search === "" && params.itemID !== undefined ? products[params.type][params.gender].map(i => i.ID === params.itemID ? <ProductPage key={randomKey()} color={i.color} size={i.size} type={i.type} description={i.description} gender={i.gender} name={i.name} image={i.mainFoto} ID={i.ID} images={i.fotos} price={i.price}/> :  null)

                  //all products in bags/accessories/t-shirt/denim
                  : props.isFiltered == false && props.isHome == false && search === "" && params.type !== undefined && params.gender === undefined  ?
                        (Object.keys(products[params.type]).map(item => products[params.type][item]).map(i => i.length >= 1).includes(true) ? Object.keys(products[params.type]).map(item => products[params.type][item].map(i =>  <ProductItem  link={`/products/${i.type}/${i.gender}/${i.ID}`} key={randomKey()} name={i.name} image={i.mainFoto}  price={i.price}/>)) : <NotFoundPage text={"We don`t have products here yet"}></NotFoundPage>) :

                                props.isFiltered == false && props.isHome == false && search === "" && params.type === undefined ? Object.keys(products).map(typeKeys => Object.keys(products[typeKeys]).map(genderKeys => products[typeKeys][genderKeys].map(i => <ProductItem  link={`/products/${i.type}/${i.gender}/${i.ID}`} key={randomKey()} name={i.name} image={i.mainFoto} price={i.price}/> )))  :
                                    props.isFiltered == false && props.isHome == false && search === "" && params.itemID == undefined && params.gender !== undefined ? ifPageExist() :
                                      props.isFiltered == true ?   Object.keys(products).map(typeKeys => Object.keys(products[typeKeys]).map(genderKeys => products[typeKeys][genderKeys].map(i => i.name.includes(search.toLowerCase()) ? <ProductItem link={`/products/${i.type}/${i.gender}/${i.ID}`} key={randomKey()} name={i.name} image={i.mainFoto} price={i.price}/> : null))) : null
            }
            {

            }

        </div>
    </>
    )
}

export default SearchPage