from feature_flag_sdk import FeatureFlagClient

client = FeatureFlagClient()

print(
    client.evaluate(
        flag_key="new_dashboard",
        user_id="user101",
        environment="Production",
    )
)

print(
    client.is_enabled(
        flag_key="new_dashboard",
        user_id="user101",
        environment="Production",
    )
)