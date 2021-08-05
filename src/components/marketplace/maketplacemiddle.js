import React from 'react'
import './marketplace.css'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import TrendingCards from '../Trending/trendingsCards'
import StatusFilter from './filters/statusfilter'
import CategoriesFilter from './filters/categoriesfilters'
import CollectionFilter from './filters/collectionfilter'
import PriceFilter from './filters/pricefilter'
import cat4 from '../../images/cat4.jpg'
import NewsLetter from '../NewsLetter/newsLetter'
import Coins from '../Coins/Coins'
import Empirelogo from '../../images/empirelogo.png'


const trendingData=[cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4]


class MarketplaceMiddle extends React.Component{
    constructor(){
        super()
        this.state={
            isOpen:false,
        }
    }
    toggle=()=>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }
    render(){
        return(
            <div>

                <p className="text-white display-3 ml-4 pb-5" id="marketplace-browse-font">Browse By Category</p>
                <div className="row mx-4" style={{position:'relative'}}>

                    <img src={Empirelogo} alt="..." id="market-bg-logo"></img>


                    <div className="col-12 col-md-4 col-lg-3 pl-0 pr-0 pr-md-4">
                        <StatusFilter></StatusFilter>
                        <div className="mt-4">
                            <CategoriesFilter></CategoriesFilter>
                        </div>
                        <div className="mt-4">
                            <CollectionFilter></CollectionFilter>
                        </div>
                        <div className="mt-4">
                            <PriceFilter></PriceFilter>
                        </div>
                    </div>
                    
                    <div className="col-12 col-md-8 col-lg-9 mt-4 mt-md-0 px-0">

                        <div className="d-flex justify-content-between" id="market-collectables-box">
                            <p className="text-white mb-0 pt-2" id="collectables-font">7,652 Collectables Found</p>
                            <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                              <DropdownToggle caret>
                                Sort By
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem>Header</DropdownItem>
                                <DropdownItem>Action</DropdownItem>
                                <DropdownItem>Another</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>
                        </div>

                        <div className="row">
                            {trendingData.map((image,index)=>{
                                return(
                                    <div key={index} className="col-12 col-md-6 col-lg-4 mt-4">
                                        <TrendingCards image={image}></TrendingCards>
                                    </div>
                                )
                            })}
                        </div>

                    </div>




                </div>

                <div className="my-5">
                    <NewsLetter></NewsLetter>
                </div>

                <div className="my-5">
                    <Coins></Coins>
                </div>

            </div>
        )
    }
}
export default MarketplaceMiddle