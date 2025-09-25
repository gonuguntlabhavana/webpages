$(function(){
  $("#regForm").on("submit", function(e){
    e.preventDefault();
    let valid = true;
    $(".err").text(""); // clear errors
    const name = $("input[name='name']").val().trim();
    const email = $("input[name='email']").val().trim();
    const phone = $("input[name='phone']").val().trim();
    const password = $("input[name='password']").val();

    if(name === "") { $("input[name='name']").next().text("Name required"); valid=false; }
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { $("input[name='email']").next().text("Invalid email"); valid=false; }
    if(!/^\d{10}$/.test(phone)) { $("input[name='phone']").next().text("Phone must be 10 digits"); valid=false; }
    if(password.length < 6) { $("input[name='password']").next().text("Password must be ≥ 6 chars"); valid=false; }
    if(valid) alert("Form submitted successfully!");
  });
});
