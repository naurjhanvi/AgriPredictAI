from pydantic import BaseModel
from typing import Optional


# ── Page 1: Basic Info ────────────────────────────────
class RegisterRequest(BaseModel):
    name: str
    phone: str
    password: str
    state: str                  # e.g. "Karnataka"
    location: str               # e.g. "Mysuru"
    land_area_acres: float


# ── Page 2: Soil Health Card ──────────────────────────
class SoilUpdateRequest(BaseModel):
    nitrogen: float             # N (kg/ha)
    phosphorus: float           # P (kg/ha)
    potassium: float            # K (kg/ha)
    ph: float                   # e.g. 6.5


# ── Login ─────────────────────────────────────────────
class LoginRequest(BaseModel):
    phone: str
    password: str


# ── Responses ─────────────────────────────────────────
class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    farmer_id: str
    name: str


class MessageResponse(BaseModel):
    message: str