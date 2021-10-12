jQuery(document).ready(function () {
    jQuery('#sidebarCollapse').on('click', function () {
        jQuery('#aty-main-menu').toggleClass('active');
        jQuery(this).toggleClass('active');
    });
    jQuery('#dismiss').on('click', function () {
        jQuery(this).parent().removeClass('active');
    });


    jQuery('.service-details a').click(function (e) {
        e.preventDefault();

        let $this = jQuery(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });
});