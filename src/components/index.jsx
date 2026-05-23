import React from 'react';

const Dummy = ({ name }) => <div style={{ padding: '10px', border: '1px dashed #ccc' }}>[Component Placeholder: {name}]</div>;

export const Header = () => <Dummy name="Header" />;
export const Footer = () => <Dummy name="Footer" />;
export const Home = () => <Dummy name="Home" />;
export const Library = () => <Dummy name="Library" />;
export const Journal = () => <Dummy name="Journal" />;
export const Casting = () => <Dummy name="Casting" />;
export const Calendar = () => <Dummy name="Calendar" />;
export const Translate = () => <Dummy name="Translate" />;
export const About = () => <Dummy name="About" />;

export { default as UserProfile } from './UserProfile';