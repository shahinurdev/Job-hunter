import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faObjectGroup,faCode,faShieldAlt,faSearchPlus,faHeadset,faFutbol} from '@fortawesome/free-solid-svg-icons'
import './FeaturedCategories.css'

export const FeaturedCategories = () => {
    return (
        <section className='container featuredCategories'>
            <h5 className='featureH5'>Feature Categories</h5>
            <div className="row">
                <div className="col-md-2 mb-sm-3">
                    <div className="card columnBg text-center">
                    <FontAwesomeIcon className="icons" icon={faObjectGroup} />
                            <h5 class="card-title">Design</h5>
                    </div>
                </div>
                <div className="col-md-2 mb-sm-3">
                    <div className="card columnBg text-center">
                    <FontAwesomeIcon className="icons" icon={faCode} />
                            <h5 class="card-title">Development</h5>
                    </div>
                </div>
                <div className="col-md-2 mb-sm-3">
                    <div className="card columnBg text-center">
                    <FontAwesomeIcon className="icons" icon={faShieldAlt} />
                            <h5 class="card-title">Security</h5>
                    </div>
                </div>
                <div className="col-md-2 mb-sm-3">
                    <div className="card columnBg text-center">
                    <FontAwesomeIcon className="icons" icon={faSearchPlus} />
                            <h5 class="card-title">Research</h5>
                    </div>
                </div>
                <div className="col-md-2 mb-sm-3">
                    <div className="card columnBg text-center">
                    <FontAwesomeIcon className="icons" icon={faHeadset} />
                            <h5 class="card-title">Gaming</h5>
                    </div>
                </div>
                <div className="col-md-2 mb-sm-3">
                    <div className="card columnBg text-center">
                    <FontAwesomeIcon className="icons" icon={faFutbol} />
                            <h5 class="card-title">Sports</h5>
                    </div>
                </div>
            </div>

        </section>
    )
}
