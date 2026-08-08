class FeatureFlagSDKException(Exception):
    """Base SDK Exception"""
    pass


class APIConnectionError(FeatureFlagSDKException):
    """Raised when SDK cannot connect to Feature Flag API"""
    pass


class InvalidResponseError(FeatureFlagSDKException):
    """Raised when API returns an invalid response"""
    pass