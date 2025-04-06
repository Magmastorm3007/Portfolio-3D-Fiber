const ContactSection = () => (
    <section className="py-16 px-4 sm:px-6 md:px-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-10">Get in Touch</h2>
    <p className="text-gray-300 mb-6 text-lg">Let's build something great together!</p>
  
    <p className="text-base sm:text-lg md:text-xl text-white">
      📄 <a href="https://drive.google.com/file/d/1eZjBjr4XPhkz2nAdeqHqd4GrpFEnidFe/view?usp=sharing" className="underline hover:text-blue-400">View Resume</a>
    </p>
  
    {/* Social Icons */}
    <div className="flex justify-center gap-6 mt-6 text-3xl">
      {/* GitHub */}
      <a
        href="https://github.com/Magmastorm3007"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-green-400 transition-transform transform hover:scale-110"
      >
        <i className="fab fa-github"></i>
      </a>
  
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/shashwat-nath-077128168/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition-transform transform hover:scale-110"
      >
        <i className="fab fa-linkedin"></i>
      </a>
  
      {/* Hashnode */}
      <a
        href="https://magmastorm.hashnode.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611902473383/CDyAuTy75.png"
          alt="Hashnode"
          className="w-8 h-8 inline-block"
        />
      </a>
  
      {/* LeetCode */}
      <a
        href="https://leetcode.com/u/user5454Z/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-8 h-8 invert inline-block"
        />
      </a>
    </div>
  </section>
  
  );
  
  export default ContactSection;
  