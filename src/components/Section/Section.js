import React from 'react';
import s from './Section.module.css';
import PropTypes from 'prop-types';

function Section({ title, children }) {
   return (
      <section className={s.section}>
         <h2>{title}</h2>
         <div className={s.wrapper}>{children}</div>
      </section>
   )
}
Section.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.node.isRequired,
}
export default Section;