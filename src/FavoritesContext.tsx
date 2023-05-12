import React, { useState } from 'react';
import { PhoneDetails } from './types/Phone';

export const FavoritesContext = React.createContext({
    favorites: [] as PhoneDetails[],
    addFavorite: (phone: PhoneDetails) => {},
    removeFavorite: (phone: PhoneDetails) => {},
});

type FavoriteProviderProps = {
  children: React.ReactNode,
}

export const FavoriteProvider:React.FC<FavoriteProviderProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<PhoneDetails[]>([]);

    const addFavorite = (phone: PhoneDetails) => {
        setFavorites([...favorites, phone]);
    };

    const removeFavorite = (phone: PhoneDetails) => {
        setFavorites(favorites.filter((element) => element.id !== phone.id));
    };

    const contextValue = {
        favorites,
        addFavorite,
        removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};