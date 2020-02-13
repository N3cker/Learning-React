import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    children: PropTypes.node.isRequired,
    image: PropTypes.string,
    titleColumn: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
              imageText={this.props.image} />

        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column titleColumn={'col1'}/>
          <Column titleColumn={'col2'}/>
          <Column titleColumn={'col3'}/>
        </div>

      </section>
      
    )
  }
}

export default List;
