import React, {Component} from 'react';


export default class Search extends Component {

    render() {
        return (
            <form role="search" className="search c-togglebox__main">
                <label htmlFor="keywords" className="sr-only">Search</label>
                <div className="form-compact__wrap">
                    <input
                        type="search"
                        results="5"
                        name="keywords"
                        placeholder="Search your style"
                        value=""
                        className="form-input form-input--ext"
                         />
                    <button type="submit" className="form-compact__btn">
                        <img src="/svg/magnify.svg"/>
                    </button>
                </div>
            </form>
        );
    }
}
