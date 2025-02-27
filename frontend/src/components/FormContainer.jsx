const FormContainer = ({ children }) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-12">
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
