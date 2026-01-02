import { motion } from 'framer-motion';
import logo from '../assets/logomodflux.png';
import logo2 from '../assets/logomodfluxagency.png';

const LogoImage = ({ src, width, height }) => {
  return (
    <img
      src={src}
      alt="Logo"
      className={`${width} ${height} object-contain`}
      draggable={false}
    />
  );
};

const Logo = () => {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      className="flex items-center"   // ✅ REQUIRED
    >
      <LogoImage
        src={logo}
        width="w-10"
        height="h-12"
      />

      <LogoImage
        src={logo2}
        width="w-30"
        height="h-10"
      />
    </motion.a>
  );
};

export default Logo;
