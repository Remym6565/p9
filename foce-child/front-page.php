<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="banner section">
            <video autoplay="autoplay" muted="" loop="infinite" src="wp-content/themes/foce-child/assets/vidéos/banner-video.mp4"> </video>
            <div class="logo-container">
                <img src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </div>
        </section>
        <section id="#story" class="story section">
            <h2 class="titre_histoire"><span class="titre-part1">L'</span><span class="titre-part2">histoire</span></h2>
            <article id="" class="story__article section">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
            <article id="characters">
                <div class="main-character">
                    <h3 class="characters section"><span class="titre-part1">Les</span><span class="titre-part2">&nbsp;personnages</span></h3>
                    <?php get_template_part('characters-slider'); ?>
                    <!-- <?php
                    $main_character = $characters_query->posts[0];
                    echo '<figure>';
                    echo get_the_post_thumbnail( $main_character->ID, 'full' );
                    echo '<figcaption>'. $main_character->post_title . '</figcaption>';
                    echo '</figure>';
                    $characters_query->next_post();
                    ?>  -->
                </div>
                <!-- <div class="other-characters section">
                    <?php
                    while ( $characters_query->have_posts() ) {
                        $characters_query->the_post();
                        echo '<figure>';
                        echo get_the_post_thumbnail( get_the_ID(), 'full' );
                        echo '<figcaption>';
                        the_title();
                        echo'</figcaption>';
                        echo '</figure>';
                    }
                    ?>
                </div> -->
            </article>
            <article id="place" class="place section">
                <div class="cloud-container">
                    <img class="cloud1" src="wp-content/themes/foce-child/assets/images/little_cloud.png" alt="Little Cloud">
                    <img class="cloud2" src="wp-content/themes/foce-child/assets/images/big_cloud.png" alt="Big cloud">
                </div>
                <div class="lieu-container">
                    <h3 class="lelieu section"><span class="titre-part1">Le</span><span class="titre-part2">&nbsp;lieu</span></h3>
                    <p class='nekos'><?php echo get_theme_mod('place'); ?></p>
                </div>
            </article>
        </section>


        <section id="studio" class="studio section">
            <h2 class="studio_koukaki section"><span class="titre-part1">Studio</span><span class="titre-part2">&nbsp;Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

        <?php get_template_part('nomination'); ?>
        
    </main><!-- #main -->

<?php
get_footer();
