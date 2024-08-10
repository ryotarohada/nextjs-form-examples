import { ServerRenderedForm, ClientRenderedForm } from "./_components";

// Features check list(ClientRenderedForm):
//-------------------------------------------
// - Input values ✅
// - Inject fetched values ✅
// - Validation (not null) ✅
// - Submit ✅
// - Submitting loader ✅
// - Submitted notification (success & error) ✅

// Features check list(ServerRenderedForm):
//-------------------------------------------
// - Input values ✅
// - Inject fetched values ✅
// - Validation (not null) 🔺 Custom validation is not possible for form values in the front end
// - Submit ✅
// - Submitting loader ✅
// - Submitted notification (success & error) ❌ Server action does not receive notification of submission completion.

export default async function Home() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 border-gray-600 border p-6 rounded">
        <h1 className="text-xl font-bold leading-relaxed">1. Not-libs</h1>
        <p className="text-md leading-relaxed">
          Not use any form library, just use Next.js,React built-in form
          features.
          <br />
          We also observe differences in behavior when form components are
          rendered on the server or client.
        </p>
        <span className="text-sm text-gray-500">
          It is recommended to read the code in conjunction with the code to get
          the details of the differences in movement.
        </span>
      </div>

      <div className="flex gap-10">
        <div className="w-full flex flex-col gap-2">
          <h2>
            <span className="text-sm mr-2">Rendered by:</span>
            <span className="text-lg font-bold">Server</span>
          </h2>
          <ServerRenderedForm />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2>
            <span className="text-sm mr-2">Rendered by:</span>
            <span className="text-lg font-bold">Client</span>
          </h2>
          <ClientRenderedForm />
        </div>
      </div>
    </div>
  );
}
