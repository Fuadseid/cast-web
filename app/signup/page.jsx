import Form from "../components/Form";

function page() {
  return (
    <div className="min-h-screen">
      <Form title="Sign Up" isExist={false} position={true} />
    </div>
  );
}

export default page;
