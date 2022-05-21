import React from 'react';

const UserAdminCreateModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Congratulations random Interner user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Yay!</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default UserAdminCreateModal;