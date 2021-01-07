export const authenticate = async() => {
  const response = await fetch('/api/auth',{
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const login = async (email, password) => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });

  const data = await res.json();
  if (res.ok) {
    localStorage.setItem("user_id", data.id);
  }
  return data;
}

export const logout = async () => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    }
  });
  localStorage.removeItem("user_id");
  localStorage.removeItem("token");
  return await response.json();
};


export const signUp = async (name,username, email,bio,country,city,profile_image_url,cover_image_url, password) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      username,
      bio,
      country,
      city,
      profile_image_url,
      cover_image_url,
      email,
      password,
    }),
  });
  return await response.json();
}
