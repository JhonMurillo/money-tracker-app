import React from 'react';
import { Button } from 'reactstrap';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLink } from 'react-icons/fa';
import { Item, List } from './styles';

export const SocialNetwork = ({ social_networks = [] }) => {
    const renderIcon = (type) => {
        type = type.toUpperCase();
        switch (type) {
            case 'FACEBOOK':
                return <FaFacebook />;
            case 'INSTAGRAM':
                return <FaInstagram />;
            case 'YOUTUBE':
                return <FaYoutube />;
            case 'TWITTER':
                return <FaTwitter />;
            default:
                return <FaLink />;
        }
    };

    if (social_networks.length === 0) {
        return <div>Sin redes sociales</div>;
    } else {
        return (
            <List>
                {social_networks.map(({ name, link: url }, index) => (
                    <Item key={index}>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                            <Button> {renderIcon(name)}</Button>
                        </a>
                    </Item>
                ))}
            </List>
        );
    }
};