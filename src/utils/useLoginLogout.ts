import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useEffect, useState } from 'react';
import { useDisconnect, useAccount } from 'wagmi'; // Ajout de useAccount pour vérifier l'état de la connexion

export function useLoginLogout() {
  const { open } = useWeb3Modal();
  const { disconnectAsync } = useDisconnect();
  const { address } = useAccount(); // Utilisé pour vérifier si l'utilisateur est connecté
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!address); // Mettez à jour l'état en fonction de la présence d'une adresse
  }, [address]);

  const logout = async () => {
    await disconnectAsync();
    setIsAuthenticated(false); // Mettre à jour l'état de l'authentification
  };

  const login = () => {
    open();
  };

  return {
    login,
    logout,
    isAuthenticated,
    address,
  };
}
