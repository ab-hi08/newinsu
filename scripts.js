function navigate(section) {
    switch (section) {
        case 'home':
            alert("Navigating to Home Page!");
            break;
        case 'about':
            alert("Navigating to About Us Page!");
            break;
        case 'services':
            alert("Navigating to Services Page!");
            break;
        case 'contact':
            alert("Navigating to Contact Page!");
            break;
        case 'health':
            alert("Navigating to Health Insurance!");
            break;
        case 'car':
            alert("Navigating to Car Insurance!");
            break;
        case 'house':
            alert("Navigating to House Insurance!");
            break;
        default:
            alert("Unknown section");
            break;
    }
}
