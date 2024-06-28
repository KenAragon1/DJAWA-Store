<?php

namespace App\Console\Commands;

use App\Models\Order;
use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SetPaymentStatusToExpired extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'payment:set-status-to-expired';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set Payment Status To Expired when it reach a certain time';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        //
        $now = Carbon::now();

        $id_payments = Payment::where('expired_at', '<', $now)->pluck('id_payment');

        Order::whereIn('id_payment', $id_payments)->update([
            'id_status' => 5
        ]);
    }
}
