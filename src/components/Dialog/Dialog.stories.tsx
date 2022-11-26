import { Dialog } from "./Dialog";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "../Button";
import { useState } from "react";

export default {
  title: "UI/Dialog",
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant='outlined' onClick={handleClickOpen}>
        Open
      </Button>
      <Dialog
        {...args}
        open={open}
        dialogActionContent={
          <Button variant='outlined' onClick={handleClose}>
            Close
          </Button>
        }
      />
    </>
  );
};

export const Default = Template.bind({});

Default.args = {
  fullScreen: false,
  fullWidth: false,
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dignissimos.",
};

export const Scroll = Template.bind({});
Scroll.args = {
  fullScreen: false,
  fullWidth: false,
  scroll: "paper",
  children:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium non, nihil earum molestiae iure iusto illo ea? Ut eum, debitis laudantium harum id libero dolore tempore eius aliquid mollitia, ullam eligendi officia? Commodi possimus sapiente molestiae ad eveniet sed obcaecati voluptatum neque autem fugit, aperiam atque quidem pariatur! At eum, autem fugiat reiciendis est temporibus distinctio animi soluta optio labore assumenda ea, eaque dolorum quisquam similique! Ut, facilis inventore suscipit, non dicta in repellat, amet aliquid harum asperiores laborum error expedita et placeat? Vitae in ea vel quaerat consectetur voluptatibus, adipisci nostrum id inventore eum, fugit nam magnam deleniti, architecto voluptas temporibus repudiandae culpa obcaecati laboriosam soluta aperiam praesentium ex explicabo illo! Repellat quisquam illo aliquam? Praesentium, cupiditate quos consequatur dolore numquam nisi doloremque at, officia doloribus quas, sit voluptates et atque alias recusandae corporis id corrupti repellat. Placeat, quidem! Vel distinctio magnam consequuntur nihil. Illo velit iste labore eius excepturi odio obcaecati! Veniam cupiditate ex non deleniti officia enim odio in quaerat mollitia dolore qui perferendis blanditiis iste error, repellendus distinctio eos, vel consequuntur optio quos voluptatum veritatis. Nemo commodi, officiis necessitatibus repudiandae distinctio nostrum tempora nam quae ex earum cupiditate modi. Fugit maxime assumenda accusamus nemo, ad quo ab, nam inventore quae, laudantium exercitationem id! Omnis, reiciendis blanditiis est natus porro aspernatur magni, amet enim quo facilis labore repudiandae accusamus quisquam ipsum magnam quasi iste quia praesentium dolor. Necessitatibus excepturi suscipit eveniet aliquid fugit sint ad ex commodi sapiente quisquam illum voluptatibus consequatur natus voluptas voluptates nihil blanditiis adipisci explicabo voluptate, inventore quasi. Non iste commodi assumenda vel? Debitis sed doloribus ratione fuga, alias iusto eveniet impedit adipisci delectus nemo est voluptatem! Beatae, accusamus blanditiis odio libero nesciunt magnam dolorem harum aliquam dicta quaerat delectus voluptate modi eaque, minus repellat dignissimos. Sunt, dolore tempora accusantium repellendus architecto, provident deleniti placeat dicta possimus amet fugit ullam rem! Consequatur, ea, praesentium vel modi neque velit rem excepturi aspernatur recusandae repellat nisi laborum doloribus aut a. Libero ad aperiam aliquam nisi quaerat, eveniet sequi exercitationem molestiae dolorem. Nisi ut expedita corporis, eaque blanditiis accusantium fuga consectetur, quibusdam voluptatem quaerat amet quidem necessitatibus! Voluptatem in, sint doloribus, blanditiis iusto aliquam neque exercitationem consequuntur earum vitae velit deserunt quod atque eos nulla. Fugit vel, cumque esse non fuga laboriosam, sapiente eum minima quas accusantium, aliquid natus! Aliquam vel, voluptatibus, nihil magni eligendi explicabo sapiente eveniet earum autem consectetur est animi dicta. Ipsam fuga maxime est nihil, dignissimos pariatur eum quibusdam enim. Obcaecati veritatis dignissimos repudiandae unde quo deserunt molestias nemo ratione eveniet, quis repellat ea aperiam sunt exercitationem quam hic. Velit laborum voluptates neque, numquam doloribus similique voluptas consectetur. Molestiae provident, reiciendis quae expedita quod totam nostrum impedit nulla delectus error aperiam at maiores fugiat adipisci voluptate tenetur eaque soluta quibusdam, vel voluptatum ratione temporibus accusantium? Rem odio eum praesentium? Ducimus, amet consequatur enim itaque hic dolorem, cumque nobis neque rem vel minima ut modi dignissimos. Illo perferendis inventore commodi quaerat, voluptatem itaque impedit adipisci minus magni quo, esse ducimus et enim dolorem.",
};
