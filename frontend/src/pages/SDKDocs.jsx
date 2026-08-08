function SDKDocs() {
  return (
    <div style={{ padding: "30px" }}>
      <h1>Python Feature Flag SDK</h1>

      <p>
        Use the Feature Flag SDK to evaluate feature flags in your
        FastAPI or Django applications without directly calling
        the Feature Flag API.
      </p>

      <hr />

      <h2>Installation</h2>

      <pre
        style={{
          background: "#282c34",
          color: "#fff",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
{`pip install feature-flag-sdk`}
      </pre>

      <hr />

      <h2>Configuration</h2>

      <pre
        style={{
          background: "#282c34",
          color: "#fff",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
{`FLAG_API_URL=http://localhost:8000

API_KEY=my-secret-key

CACHE_TTL=60`}
      </pre>

      <hr />

      <h2>Usage Example</h2>

      <pre
        style={{
          background: "#282c34",
          color: "#fff",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
{`from feature_flag_sdk import FeatureFlagClient

client = FeatureFlagClient()

enabled = client.is_enabled(
    "new_dashboard",
    user_id="user101",
    environment="Production"
)

print(enabled)`}
      </pre>

      <hr />

      <h2>FastAPI Middleware</h2>

      <pre
        style={{
          background: "#282c34",
          color: "#fff",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
{`from feature_flag_sdk.middleware import FeatureFlagMiddleware

app.add_middleware(
    FeatureFlagMiddleware
)`}
      </pre>

      <hr />

      <h2>Django Middleware</h2>

      <pre
        style={{
          background: "#282c34",
          color: "#fff",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
{`MIDDLEWARE = [

    ...

    "feature_flag_sdk.middleware.FeatureFlagMiddleware"

]`}
      </pre>

      <hr />

      <h2>Example</h2>

      <pre
        style={{
          background: "#282c34",
          color: "#fff",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
{`if client.is_enabled("payment_v2"):

    print("New payment flow")

else:

    print("Old payment flow")`}
      </pre>
    </div>
  );
}

export default SDKDocs;