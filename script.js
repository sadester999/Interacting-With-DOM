const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];


for (let i = 0; i < storeItems.length; i++)
{    
    if( storeItems[i].inStock )
    {
        $('#products').append(
            '<div class="flexbox flexbox-light">'
                + '<div class="fb">' + '$' + storeItems[i].price + '</div>'    
                + '<div class="fb">' + storeItems[i].name + '</div>'
                + '<div class="fb">' + storeItems[i].details + '</div>'
            + '</div>'
        );
    }
}
  
$('#toggle-btn').on('click', function()
{    
    let old_theme = $(this).attr('theme');
    let new_theme = old_theme == 'light' ? 'dark' : 'light';

    $(this).attr('theme', new_theme);

    $('body').removeClass('bg-' + old_theme).addClass('bg-' + new_theme); // background color
    $('h1').removeClass('title-' + old_theme).addClass('title-' + new_theme); // title color
    $('hr').removeClass('hr-' + old_theme).addClass('hr-' + new_theme); // title color
    $(this).removeClass('btn-' + old_theme).addClass('btn-' + new_theme); // button color

    // flexbox colors
    let x = $('#products').children().each(function()
    {
        $(this).removeClass('flexbox-' + old_theme).addClass('flexbox-' + new_theme);
        $(this).children().each(function(){
            
        })
    });

});
