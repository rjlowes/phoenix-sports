import React, {Component} from 'react';
import PopoutMod from 'components/mods/PopoutMod';

const PurchaseForm = ({product, onChange, onSubmit, handleSizeChange}) => {
    if(!product) {
        return null;
    }

    return (
        <form role="form" id="form-add-to-bag" method="post" onSubmit={onSubmit} noValidate>
            <PopoutMod heading="Size">
                <ul className="grid-sizes">
                    {product.variants.map((variant, idx) => {
                        return (
                            <li className="grid-sizes__item" key={ idx }>
                                <label className="form-box-group">
                                    <input type="radio" name="sku" value={ variant.sku } onChange={onChange} className="form-box-group__input" />
                                    <span className="form-box-group__text">{ variant.size }</span>
                                </label>
                            </li>
                        );
                    })}
                </ul>
            </PopoutMod>
           <button type="submit" className="btn">Buy Now</button>
       </form>
   );
};

export default PurchaseForm;
