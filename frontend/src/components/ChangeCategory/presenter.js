import React, { Component } from "react";
import Styles from "./styles.scss";
// constructor >> render >> componentDidMount
// props : 부모, index로부터 받는거 , state : 내가 가진거

const ChangeCategory = props => (
  <div className={Styles.formComponent}>
    <form className={Styles.form} onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        className={Styles.textInput}
        onChange={props.handleInputChange}
        name="category"
        value={props.categoryValue}
      />
      <input type="submit" className={Styles.button} />
    </form>
  </div>
); /* 
class ChangeCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { onSubmit } = this.props;
        const { category } = this.state;

        ChangeCategory(category);
    }
    handleChange = ({ target : { name, value } }) => {
        this.setState({ [name]: value })
    }


    render() {
    return (
        <div className={styles.form}>
            <div className={styles.nowCategory}>
                <h3>Now Category!</h3>
                {this.props.category}
            </div>
            <div className={styles.formComponent}>
                <form className={styles.form} 
                onSubmit={this.handleSubmit} 
                >
                    <input className={styles.input}
                    type="text"
                    placeholder="category"
                    name="category"
                    onChange={this.handleChange}
                    />
                    <input type="submit" />
                </form>
            </div>
        </div>
        

    )
    }
}
 */
export default ChangeCategory;
